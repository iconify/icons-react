import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg5jd3b1a.css';
import '../../css/a/a__o3db_x.css';
import '../../css/a/aaaprebjw.css';
import '../../css/v/v3dddsvcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg5jd3b1a"/><path class="a__o3db_x"/><path class="aaaprebjw"/><path class="v3dddsvcv"/>`,
		"fallback": "solar:point-on-map-perspective-bold-duotone",
	});
}

export default Component;
