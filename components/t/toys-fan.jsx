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
		"content": `<style>.ywx8csb6w {
  fill: currentColor;
  d: path("M12 12q0-2.275 1.613-3.887T17.5 6.5t3.888 1.613T23 12zm-9.387 3.888Q1 14.275 1 12h11q0 2.275-1.612 3.888T6.5 17.5t-3.887-1.612M12 12q-2.275 0-3.887-1.612T6.5 6.5t1.613-3.887T12 1zm0 11V12q2.275 0 3.888 1.613T17.5 17.5t-1.612 3.888T12 23");
}
</style><path class="ywx8csb6w"/>`,
		"fallback": "material-symbols:toys-fan",
	});
}

export default Component;
