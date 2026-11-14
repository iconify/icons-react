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
		"content": `<style>.v5zq41b_v {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.957 3.906q-3.707-2.852-7.414 0q-.071.054-.128.124q-.056.07-.094.152t-.056.169q-.018.088-.014.178l.22 5.721h7.558l.22-5.721q.004-.09-.014-.178t-.056-.169q-.038-.082-.094-.152q-.057-.07-.128-.124m4.086 0q3.707-2.852 7.414 0q.071.054.128.124q.056.07.094.152t.056.169q.018.088.014.178l-.22 5.721h-7.558l-.22-5.721q-.004-.09.014-.178t.056-.169q.038-.082.094-.152q.057-.07.128-.124m-.015 7.844l.223 5.779q.006.177.092.332q1.589 2.889 3.407 2.889t3.407-2.889q.086-.155.092-.332l.223-5.779zM2.751 17.529l-.223-5.779h7.444l-.223 5.779q-.006.177-.092.332Q8.068 20.75 6.25 20.75t-3.407-2.889q-.086-.155-.092-.332");
}
</style><path class="v5zq41b_v"/>`,
		"fallback": "uix-solid:shin-guards-pair",
	});
}

export default Component;
