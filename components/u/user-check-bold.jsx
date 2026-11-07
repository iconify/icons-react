import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg261rb8a.css';
import '../../css/d/dkklelgka.css';
import '../../css/l/lc21qzuqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg261rb8a"/><path clip-rule="evenodd" class="dkklelgka"/><path class="lc21qzuqt"/>`,
		"fallback": "solar:user-check-bold",
	});
}

export default Component;
