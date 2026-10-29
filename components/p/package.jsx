import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymoftpuut.css';
import '../../css/p/pbpibcbpr.css';
import '../../css/v/vzmopyyzf.css';
import '../../css/j/jpvknfbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k ymoftpuut"/><path class="pbpibcbpr wm-k"/><path class="vzmopyyzf wm-k"/><path class="jpvknfbop wm-a"/>`,
		"fallback": "withicons-bauhaus:package",
	});
}

export default Component;
