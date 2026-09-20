import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.m4z3z3oga {
  fill: currentColor;
  d: path("M10 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6M5.053 9.996q-.051.244-.051.504V14a4.99 4.99 0 0 0 1.767 3.814l-.171.05a4 4 0 0 1-4.9-2.828l-.647-2.415a1.5 1.5 0 0 1 1.061-1.837zm8.182 7.818A4.99 4.99 0 0 0 15.002 14v-3.5q-.001-.26-.05-.504l2.94.788a1.5 1.5 0 0 1 1.06 1.837l-.647 2.415a4 4 0 0 1-5.07 2.778M16.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-13 0a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m4 5A1.5 1.5 0 0 0 6 10.5V14a4 4 0 0 0 8 0v-3.5A1.5 1.5 0 0 0 12.5 9z");
}
</style><path class="m4z3z3oga"/>`,
		"fallback": "fluent:people-community-20-filled",
	});
}

export default Component;
