import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/zm9blybcx.css';
import '../../css/x/x58sohbxv.css';
import '../../css/a/aqqdqjb5s.css';
import '../../css/f/fz43jpbxl.css';
import '../../css/v/vhj9webyq.css';
import '../../css/x/xp14qmzhq.css';
import '../../css/m/m_43y4i2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow zm9blybcx"/><path class="x58sohbxv"/><path class="aqqdqjb5s"/><path class="fz43jpbxl"/><path class="vhj9webyq"/><path class="wm-shine xp14qmzhq"/><path class="m_43y4i2q wm-deco"/></g>`,
		"fallback": "withicons-sticker:users-round",
	});
}

export default Component;
