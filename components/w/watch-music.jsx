import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vqydno98w.css';
import '../../css/e/er0tjywys.css';
import '../../css/q/qydugn1hh.css';
import '../../css/h/h_5fnjb7c.css';
import '../../css/c/cqfuqgbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vqydno98w"/><rect class="er0tjywys"/><path class="qydugn1hh"/><circle class="h_5fnjb7c"/><path class="cqfuqgbnf"/></g>`,
		"fallback": "lucide-lab:watch-music",
	});
}

export default Component;
