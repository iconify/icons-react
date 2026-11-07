import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdsgiib1a.css';
import '../../css/g/gmzuw1e_j.css';
import '../../css/c/cha8n8h4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sdsgiib1a"/><path class="gmzuw1e_j"/><path class="cha8n8h4w"/>`,
		"fallback": "solar:suitcase-outline",
	});
}

export default Component;
