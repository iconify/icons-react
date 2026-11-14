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
		"content": `<style>.kdie7dbof {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.811 5.326q2.439.492 2.439 4.174q0 .3 1.011 1.396Q18.75 13.591 18.75 16q0 2.533-2.165 4.217Q14.614 21.75 12 21.75t-4.585-1.533Q5.25 18.533 5.25 16q0-2.409 2.489-5.104Q8.75 9.8 8.75 9.5q0-3.757 2.54-4.193q.277-2.287 2.473-3.019q.07-.023.143-.032t.147-.004t.145.025t.137.052t.125.079t.107.101t.085.12t.06.134q.047.141.036.29q-.01.149-.077.282q-.067.134-.18.232q-.112.097-.254.145q-1.185.395-1.426 1.614");
}
</style><path class="kdie7dbof"/>`,
		"fallback": "uix-solid:pear",
	});
}

export default Component;
