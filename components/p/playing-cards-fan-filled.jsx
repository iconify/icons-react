import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2wfmvmec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s2wfmvmec"/>`,
		"fallback": "lucide-extended:playing-cards-fan-filled",
	});
}

export default Component;
