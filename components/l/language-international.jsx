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
		"content": `<style>.xrc4ifbqm {
  fill: currentColor;
  d: path("M1 16V8h2v8zm3 0V8h2l2.225 4.45L8 12.5V8h2v8H8l-2.225-4.45L6 11.5V16zm9 0v-6h-2V8h6v2h-2v6zm5 0V8h2v6h3v2z");
}
</style><path class="xrc4ifbqm"/>`,
		"fallback": "material-symbols:language-international",
	});
}

export default Component;
