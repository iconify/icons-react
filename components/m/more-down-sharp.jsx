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
		"content": `<style>.njq-t5b9p {
  fill: currentColor;
  d: path("M5 19V8h2v9h9v2zm5-5V3h2v9h9v2z");
}
</style><path class="njq-t5b9p"/>`,
		"fallback": "material-symbols:more-down-sharp",
	});
}

export default Component;
