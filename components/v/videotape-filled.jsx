import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovu4icjzb.css';
import '../../css/v/vk_vtrrnl.css';
import '../../css/p/poade0yht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovu4icjzb"/><path clip-rule="evenodd" class="vk_vtrrnl"/><path class="poade0yht"/>`,
		"fallback": "lucide-extended:videotape-filled",
	});
}

export default Component;
