import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q35acvs1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q35acvs1v"/>`,
		"fallback": "streamline-sharp:mail-loading-solid",
	});
}

export default Component;
