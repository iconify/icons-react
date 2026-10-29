import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mt5eweixk.css';
import '../../css/n/ninwjubig.css';
import '../../css/q/q4m91fbzi.css';
import '../../css/a/agf5n5b5r.css';
import '../../css/k/kcv6g-tdp.css';
import '../../css/x/xgw9dw2wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mt5eweixk wm-shadow"/><path class="ninwjubig"/><path class="q4m91fbzi"/><path class="agf5n5b5r"/><path class="kcv6g-tdp wm-shine"/><path class="wm-deco xgw9dw2wv"/></g>`,
		"fallback": "withicons-sticker:list-ordered",
	});
}

export default Component;
