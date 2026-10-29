import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/ve9we6bnu.css';
import '../../css/z/z6derjb1g.css';
import '../../css/e/ebfvrvh-l.css';
import '../../css/k/kzdx14k4r.css';
import '../../css/q/qa-zutbar.css';
import '../../css/z/zmwp-uv7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ve9we6bnu wm-shadow"/><path class="z6derjb1g"/><path class="ebfvrvh-l"/><path class="kzdx14k4r"/><path class="qa-zutbar wm-shine"/><path class="wm-deco zmwp-uv7f"/></g>`,
		"fallback": "withicons-sticker:magnet",
	});
}

export default Component;
