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
		"content": `<style>.kdh4s1b7w {
  fill: currentColor;
  d: path("M7 15.385v-6.77q0-.67.472-1.143Q7.944 7 8.616 7h6.769q.67 0 1.143.472q.472.472.472 1.144v6.769q0 .67-.472 1.143q-.472.472-1.143.472h-6.77q-.67 0-1.143-.472Q7 16.056 7 15.385M8.616 16h6.769q.269 0 .442-.173t.173-.442v-6.77q0-.269-.173-.442T15.385 8h-6.77q-.269 0-.442.173T8 8.616v6.769q0 .269.173.442t.443.173M12 12");
}
</style><path class="kdh4s1b7w"/>`,
		"fallback": "material-symbols-light:stop-outline-rounded",
	});
}

export default Component;
