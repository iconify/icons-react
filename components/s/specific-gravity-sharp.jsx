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
		"content": `<style>.g8mscwr8r {
  fill: currentColor;
  d: path("M5.2 22L3 2h18l-2.2 20zm.475-14H9.35q.525-.475 1.2-.737T12 7t1.45.263t1.2.737h3.675l.425-4H5.225zM12 13q.825 0 1.413-.587T14 11t-.587-1.412T12 9t-1.412.588T10 11t.588 1.413T12 13");
}
</style><path class="g8mscwr8r"/>`,
		"fallback": "material-symbols:specific-gravity-sharp",
	});
}

export default Component;
