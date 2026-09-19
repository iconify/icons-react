import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1v9vfuti.css';
import '../../css/w/w99tqt19m.css';
import '../../css/i/im_5uab-x.css';
import '../../css/f/fkpzunb7z.css';
import '../../css/b/bob0rw7ll.css';
import '../../css/l/l6h7gmb7i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1v9vfuti"/><path class="w99tqt19m"/><path class="im_5uab-x"/><path class="fkpzunb7z"/><path class="bob0rw7ll"/><path class="l6h7gmb7i"/>`,
		"fallback": "fxemoji:loveletter",
	});
}

export default Component;
