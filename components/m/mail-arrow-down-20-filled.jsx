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
		"content": `<style>.smalb7vqn {
  fill: currentColor;
  d: path("M14.5 11c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.5 5.5 0 0 0 14.5 11m-10-7h4.707a5.5 5.5 0 0 0 2.235 6.072L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4m10 6a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-2.354-4.146a.5.5 0 0 1 .708-.708L14 6.293V3.5a.5.5 0 0 1 1 0v2.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.351.146h-.006a.5.5 0 0 1-.348-.144l-.003-.003z");
}
</style><path class="smalb7vqn"/>`,
		"fallback": "fluent:mail-arrow-down-20-filled",
	});
}

export default Component;
