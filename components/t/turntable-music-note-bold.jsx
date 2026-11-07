import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgzavdeog.css';
import '../../css/h/h5nyfzb8a.css';
import '../../css/i/i9po9cwhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bgzavdeog"/><path class="h5nyfzb8a"/><path clip-rule="evenodd" class="i9po9cwhk"/>`,
		"fallback": "solar:turntable-music-note-bold",
	});
}

export default Component;
