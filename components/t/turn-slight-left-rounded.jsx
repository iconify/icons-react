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
		"content": `<style>.v-e1yr4mb {
  fill: currentColor;
  d: path("M13.288 19.713Q13 19.425 13 19v-6.6l-5-5v1.25q0 .425-.288.713T7 9.65t-.712-.288T6 8.65V5q0-.425.288-.712T7 4h3.65q.425 0 .713.288T11.65 5t-.288.713T10.65 6H9.4l5.025 5.025q.275.275.425.638t.15.762V19q0 .425-.287.713T14 20t-.712-.288");
}
</style><path class="v-e1yr4mb"/>`,
		"fallback": "material-symbols:turn-slight-left-rounded",
	});
}

export default Component;
