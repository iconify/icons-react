import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/almky1j9k.css';
import '../../css/d/dbq485b4e.css';
import '../../css/o/ocif-h9bu.css';
import '../../css/v/vnxkb904h.css';
import '../../css/j/juu6lxbqs.css';
import '../../css/o/owomm5jgl.css';
import '../../css/n/nvnmtcc4c.css';
import '../../css/u/umomfebca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="almky1j9k"/><path class="dbq485b4e"/><path class="ocif-h9bu"/><path class="vnxkb904h"/><path class="juu6lxbqs"/><path class="owomm5jgl"/><path class="nvnmtcc4c"/><path class="umomfebca"/>`,
		"fallback": "streamline-emojis:persevering-face",
	});
}

export default Component;
