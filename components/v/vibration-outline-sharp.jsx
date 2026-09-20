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
		"content": `<style>.reumr90qd {
  fill: currentColor;
  d: path("M0 15V9h2v6zm3 2V7h2v10zm19-2V9h2v6zm-3 2V7h2v10zM6 21V3h12v18zm10-2V5H8v14zM12.713 7.713Q13 7.425 13 7t-.288-.712T12 6t-.712.288T11 7t.288.713T12 8t.713-.288M8 5v14z");
}
</style><path class="reumr90qd"/>`,
		"fallback": "material-symbols:vibration-outline-sharp",
	});
}

export default Component;
