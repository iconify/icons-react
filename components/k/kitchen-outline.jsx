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
		"content": `<style>.bue73tfqz {
  fill: currentColor;
  d: path("M8.192 8V5.385h1V8zm0 8.116v-4.347h1v4.347zM6.616 21q-.672 0-1.144-.472T5 19.385V4.615q0-.67.472-1.143Q5.944 3 6.616 3h10.769q.67 0 1.143.472q.472.472.472 1.144v14.769q0 .67-.472 1.143q-.472.472-1.143.472zm0-1h10.769q.269 0 .442-.173t.173-.442v-9H6v9q0 .269.173.442t.443.173M6 9.385h12v-4.77q0-.269-.173-.442T17.385 4H6.615q-.269 0-.442.173T6 4.616z");
}
</style><path class="bue73tfqz"/>`,
		"fallback": "material-symbols-light:kitchen-outline",
	});
}

export default Component;
