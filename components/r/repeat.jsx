import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gznbihb4n.css';
import '../../css/s/smqqt0n0e.css';
import '../../css/p/pcjcjycvu.css';
import '../../css/s/spjjyyb5j.css';
import '../../css/g/gwj9cqgka.css';
import '../../css/a/aexe23bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gznbihb4n wm-shadow"/><path class="smqqt0n0e"/><path class="pcjcjycvu"/><path class="spjjyyb5j"/><path class="gwj9cqgka wm-shine"/><path class="aexe23bqk wm-deco"/></g>`,
		"fallback": "withicons-sticker:repeat",
	});
}

export default Component;
