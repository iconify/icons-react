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
		"content": `<style>.vy2q5cbgt {
  fill: currentColor;
  d: path("M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75m-.975 9.964a.75.75 0 0 1 .082.976l-.071.085l-2.25 2.296a.75.75 0 0 1-.987.074l-.084-.074l-2.253-2.296a.75.75 0 0 1 .987-1.124l.083.074L12 15.225l1.714-1.75a.75.75 0 0 1 1.061-.01m-2.24-6.239l2.25 2.296a.75.75 0 1 1-1.07 1.05L12 8.82l-1.718 1.75a.75.75 0 0 1-1.07-1.05l2.253-2.296a.75.75 0 0 1 1.07 0");
}
</style><path class="vy2q5cbgt"/>`,
		"fallback": "fluent:phone-vertical-scroll-24-regular",
	});
}

export default Component;
