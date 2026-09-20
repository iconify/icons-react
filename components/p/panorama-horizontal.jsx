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
		"content": `<style>.wxglovfdn {
  fill: currentColor;
  d: path("M3 20q-.425 0-.712-.288T2 19V5q0-.425.288-.712T3 4q.2 0 .888.238t1.837.512t2.713.513T12 5.5t3.563-.238t2.712-.512t1.838-.513T21 4q.425 0 .713.288T22 5v14q0 .425-.288.713T21 20q-.2 0-.888-.238t-1.837-.512t-2.712-.513T12 18.5t-3.562.238t-2.713.512t-1.837.513T3 20");
}
</style><path class="wxglovfdn"/>`,
		"fallback": "material-symbols:panorama-horizontal",
	});
}

export default Component;
