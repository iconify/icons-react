import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyi7vqbkj.css';
import '../../css/b/bar6-jb7u.css';
import '../../css/g/g9rotpu1e.css';
import '../../css/z/zz5zdqb7z.css';
import '../../css/w/w9l-bvx8e.css';
import '../../css/e/eutks2zwa.css';
import '../../css/f/fm5gmibbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyi7vqbkj wm-shadow"/><path class="bar6-jb7u wm-k"/><path class="g9rotpu1e wm-k"/><path class="wm-k zz5zdqb7z"/><path class="w9l-bvx8e wm-k"/><path class="eutks2zwa wm-k"/><path class="fm5gmibbe wm-shine"/>`,
		"fallback": "withicons-pastel:square",
	});
}

export default Component;
