import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/g/git7pab-z.css';
import '../../css/z/zu5ak_uvj.css';
import '../../css/n/n36oh8btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="git7pab-z"/><path class="zu5ak_uvj"/><path class="n36oh8btv"/></g>`,
		"fallback": "streamline-cyber:wallet-1",
	});
}

export default Component;
