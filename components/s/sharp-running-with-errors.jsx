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
		"content": `<style>.du0aa4bng {
  fill: currentColor;
  d: path("M22 10v8h-2v-8zm-2 10v2h2v-2zm-2-2.71A8 8 0 0 1 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55A9.97 9.97 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-.74 6-2z");
}
</style><path class="du0aa4bng"/>`,
		"fallback": "ic:sharp-running-with-errors",
	});
}

export default Component;
