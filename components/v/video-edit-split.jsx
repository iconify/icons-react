import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ucl9bwa.css';
import '../../css/t/t28yzsb-k.css';
import '../../css/z/z7mahnbzw.css';
import '../../css/l/le1m9tbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5ucl9bwa"/><path class="t28yzsb-k"/><path class="z7mahnbzw"/><path class="le1m9tbnq"/>`,
		"fallback": "streamline-freehand:video-edit-split",
	});
}

export default Component;
