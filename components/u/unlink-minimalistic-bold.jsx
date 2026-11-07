import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haz025baf.css';
import '../../css/d/dwawwwbeu.css';
import '../../css/z/z42qdcbby.css';
import '../../css/w/wb8cm9-om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haz025baf"/><path class="dwawwwbeu"/><path class="z42qdcbby"/><path class="wb8cm9-om"/>`,
		"fallback": "solar:unlink-minimalistic-bold",
	});
}

export default Component;
