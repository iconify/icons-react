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
		"content": `<style>.p1g19-lim {
  fill: currentColor;
  d: path("m9.6 15.6l1.4-1.45L8.85 12L11 9.85L9.6 8.4L6 12zm4.8 0L18 12l-3.6-3.6L13 9.85L15.15 12L13 14.15zM3 21V3h6.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H21v18zm2-2h14V5H5zm7.538-14.962q.212-.213.212-.538t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212t.538-.213M5 19V5z");
}
</style><path class="p1g19-lim"/>`,
		"fallback": "material-symbols:integration-instructions-outline-sharp",
	});
}

export default Component;
