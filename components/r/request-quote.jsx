import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rjy1l9m2f {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm5-3h2v-1h1q.425 0 .713-.288T15 17v-3q0-.425-.288-.712T14 13h-3v-1h4v-2h-2V9h-2v1h-1q-.425 0-.712.288T9 11v3q0 .425.288.713T10 15h3v1H9v2h2zm2.175-11h4l-4-4z");
}
</style><path class="rjy1l9m2f"/>`,
		"fallback": "material-symbols:request-quote",
	});
}

export default Component;
