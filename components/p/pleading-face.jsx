import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k17q9m45z.css';
import '../../css/n/nvz9-2_cn.css';
import '../../css/t/t81cnqbnj.css';
import '../../css/h/huuajhmrh.css';
import '../../css/i/igeymfbfr.css';
import '../../css/b/b89xu61ou.css';
import '../../css/f/feq5sd-ut.css';
import '../../css/b/btus2g_1p.css';
import '../../css/e/ehiple3ya.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k17q9m45z"/><circle class="nvz9-2_cn"/><circle class="t81cnqbnj"/><circle class="huuajhmrh"/><path class="igeymfbfr"/><circle class="b89xu61ou"/><circle class="feq5sd-ut"/><path class="btus2g_1p"/><path class="ehiple3ya"/>`,
		"fallback": "openmoji:pleading-face",
	});
}

export default Component;
