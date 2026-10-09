import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzxqjgbju.css';
import '../../css/o/ozlm6mbor.css';
import '../../css/b/b649fkhgn.css';
import '../../css/g/g8h37j62m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzxqjgbju"/><path class="ozlm6mbor"/><path class="b649fkhgn"/><path class="g8h37j62m"/>`,
		"fallback": "energy-icons:recycle-20",
	});
}

export default Component;
