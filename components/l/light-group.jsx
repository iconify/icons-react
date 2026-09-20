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
		"content": `<style>.btemekbme {
  fill: currentColor;
  d: path("M3.5 21v-1h7v1zm13.5-.961q-.633 0-1.086-.463q-.452-.462-.452-1.095h-2.616q-.329 0-.568-.201q-.24-.201-.24-.51q.028-1.712 1.353-2.882t3.109-1.346V3.981h1v9.561q1.81.177 3.132 1.347t1.349 2.88q0 .31-.24.51q-.239.202-.568.202h-2.615q0 .632-.45 1.095T17 20.038M6.5 18.5V11H3.058q-.404 0-.643-.32q-.24-.32-.134-.7l1.433-5.384q.061-.267.276-.431Q4.204 4 4.496 4H9.53q.292 0 .507.165q.214.164.276.431l1.432 5.385q.106.379-.133.699q-.24.32-.644.32H7.5v7.5z");
}
</style><path class="btemekbme"/>`,
		"fallback": "material-symbols-light:light-group",
	});
}

export default Component;
