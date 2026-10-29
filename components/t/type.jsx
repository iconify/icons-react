import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vzrb36ytq.css';
import '../../css/l/lds97qcoz.css';
import '../../css/j/jdely0bqz.css';
import '../../css/v/vep726n9i.css';
import '../../css/z/zwnqi2bba.css';
import '../../css/i/ig5i98rhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="vzrb36ytq wm-shadow"/><path class="lds97qcoz"/><path class="jdely0bqz"/><path class="vep726n9i"/><path class="wm-shine zwnqi2bba"/><path class="ig5i98rhz wm-deco"/></g>`,
		"fallback": "withicons-sticker:type",
	});
}

export default Component;
