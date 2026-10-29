import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/yi1vn8gld.css';
import '../../css/g/gqufqsxub.css';
import '../../css/n/n9abnpbmc.css';
import '../../css/i/ijcv4x68c.css';
import '../../css/e/eu0vxpb2c.css';
import '../../css/x/xkzbfq_8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow yi1vn8gld"/><path class="gqufqsxub"/><path class="n9abnpbmc"/><path class="ijcv4x68c"/><path class="eu0vxpb2c wm-shine"/><path class="wm-deco xkzbfq_8i"/></g>`,
		"fallback": "withicons-sticker:tree-deciduous",
	});
}

export default Component;
