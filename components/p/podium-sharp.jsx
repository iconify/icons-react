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
		"content": `<style>.qkacxu7zi {
  fill: currentColor;
  d: path("M11.566 7.066q-.433.434-1.066.434q-.306 0-.571-.116q-.265-.117-.483-.336q-.715.2-1.222.725T7.564 9h12.359l-.865 5.5h-2.983l.283-2.942H7.642l.283 2.942H4.942L4.077 9h2.48q.155-1.014.81-1.783t1.652-1.07Q9 6.106 9 6.05v-.096q.017-.621.448-1.038q.43-.416 1.052-.416q.633 0 1.066.434Q12 5.367 12 6t-.434 1.066M9.31 19.558h5.382l.684-7.116h-6.75z");
}
</style><path class="qkacxu7zi"/>`,
		"fallback": "material-symbols-light:podium-sharp",
	});
}

export default Component;
