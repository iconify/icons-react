import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqsk4dbaf.css';
import '../../css/b/b8ymvlblf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqsk4dbaf"/><path class="b8ymvlblf"/>`,
		"fallback": "streamline-pixel:music-album-cd-disk-playlist",
	});
}

export default Component;
