import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwgm7fbxw.css';
import '../../css/c/cdyatobkg.css';
import '../../css/z/zcwxudbsj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwgm7fbxw"/><path class="cdyatobkg"/><path class="zcwxudbsj"/>`,
		"fallback": "energy-icons:school-bus-48-bold",
	});
}

export default Component;
