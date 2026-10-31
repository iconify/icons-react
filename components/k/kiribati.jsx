import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5yjr_spk.css';
import '../../css/p/p075md36j.css';
import '../../css/l/ldzer7b8d.css';
import '../../css/h/hz4bs5lpu.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5yjr_spk"/><path class="p075md36j"/><path class="ldzer7b8d"/><path class="hz4bs5lpu"/>`,
		"fallback": "tabler-flags:kiribati",
	});
}

export default Component;
