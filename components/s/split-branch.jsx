import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4r51ccgo.css';
import '../../css/k/kz0c2chyn.css';
import '../../css/h/h3mlx2byk.css';
import '../../css/e/e6i73-02r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4r51ccgo"/><path class="kz0c2chyn"/><path class="h3mlx2byk"/><path class="e6i73-02r"/></g>`,
		"fallback": "icon-park:split-branch",
	});
}

export default Component;
