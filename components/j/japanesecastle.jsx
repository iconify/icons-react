import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e906i-3ln.css';
import '../../css/i/i6zfmwblj.css';
import '../../css/k/kod42bcng.css';
import '../../css/p/pv2s4tb3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e906i-3ln"/><path class="i6zfmwblj"/><path class="kod42bcng"/><path class="pv2s4tb3f"/>`,
		"fallback": "fxemoji:japanesecastle",
	});
}

export default Component;
