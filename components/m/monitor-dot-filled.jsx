import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s24s3go5f.css';
import '../../css/a/aba_xubdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s24s3go5f"/><path class="aba_xubdq"/>`,
		"fallback": "lucide-extended:monitor-dot-filled",
	});
}

export default Component;
