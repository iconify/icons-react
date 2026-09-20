import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/g/gqy9kwb5a.css';
import '../../css/v/vfe670afz.css';
import '../../css/k/k-3w78bvg.css';
import '../../css/s/s_f6m4b-b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="juu6lxbqs"/><path class="ocif-h9bu"/><path class="gqy9kwb5a"/><path class="vfe670afz"/><path class="k-3w78bvg"/><path class="s_f6m4b-b"/>`,
		"fallback": "streamline-emojis:star-struck-2",
	});
}

export default Component;
