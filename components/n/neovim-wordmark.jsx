import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmy2s3qlv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmy2s3qlv"/>`,
		"fallback": "devicon-plain:neovim-wordmark",
	});
}

export default Component;
