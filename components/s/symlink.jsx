import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4zfxlbgj.css';
import '../../css/b/bh79t3b8l.css';
import '../../css/n/nnghyyb1l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4zfxlbgj"/><path class="bh79t3b8l"/><path class="nnghyyb1l"/>`,
		"fallback": "catppuccin:symlink",
	});
}

export default Component;
