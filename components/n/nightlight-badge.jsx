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
		"content": `<style>.rxp4mzobd {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-4q.675 0 1.3-.125t1.2-.4q-1.575-.725-2.538-2.175T11 12q0-1.85.963-3.3T14.5 6.525q-.575-.275-1.2-.4T12 6Q9.5 6 7.75 7.738T6 12q0 2.5 1.75 4.25T12 18Z");
}
</style><path class="rxp4mzobd"/>`,
		"fallback": "material-symbols:nightlight-badge",
	});
}

export default Component;
