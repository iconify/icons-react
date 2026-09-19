import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.disgsxbvy {
  width: 3.806px;
  height: 4.486px;
  x: 28.745px;
  y: 10.145px;
  rx: 1px;
  ry: 1px;
}

.gyygb7jon {
  width: 3.806px;
  height: 4.486px;
  x: 32.072px;
  y: 17.029px;
  rx: 1px;
  ry: 1px;
}

.isc1omb0p {
  width: 3.806px;
  height: 4.486px;
  x: 12.111px;
  y: 17.029px;
  rx: 1px;
  ry: 1px;
}

.jo-j5acib {
  width: 3.806px;
  height: 4.486px;
  x: 35.399px;
  y: 23.912px;
  rx: 1px;
  ry: 1px;
}

.kolo_wk7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.689 32.36l11.822-.067a2 2 0 0 0 1.989-2V8.94a2 2 0 0 0-2-2H7.627a2 2 0 0 0-2.001 1.988L5.5 30.283a2 2 0 0 0 1.987 2.012l9.316.066v8.7z");
}

.ktf_9sbkx {
  width: 17.113px;
  height: 4.486px;
  x: 15.438px;
  y: 23.912px;
  rx: 1px;
  ry: 1px;
}

.nlvrp4b2k {
  width: 3.806px;
  height: 4.486px;
  x: 8.784px;
  y: 23.912px;
  rx: 1px;
  ry: 1px;
}

.p4v9qfu9w {
  width: 3.806px;
  height: 4.486px;
  x: 22.091px;
  y: 10.145px;
  rx: 1px;
  ry: 1px;
}

.qayovacxc {
  width: 3.806px;
  height: 4.486px;
  x: 25.418px;
  y: 17.029px;
  rx: 1px;
  ry: 1px;
}

.rhid8fzgz {
  width: 3.806px;
  height: 4.486px;
  x: 15.438px;
  y: 10.145px;
  rx: 1px;
  ry: 1px;
}

.sj2kcs4qs {
  width: 3.806px;
  height: 4.486px;
  x: 8.784px;
  y: 10.145px;
  rx: 1px;
  ry: 1px;
}

.xawe0xbyo {
  width: 3.806px;
  height: 4.486px;
  x: 35.399px;
  y: 10.145px;
  rx: 1px;
  ry: 1px;
}

.y_dyf7b4c {
  width: 3.806px;
  height: 4.486px;
  x: 18.764px;
  y: 17.029px;
  rx: 1px;
  ry: 1px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="kolo_wk7z"/><g class="y9tr6bcfx"><rect class="sj2kcs4qs"/><rect class="rhid8fzgz"/><rect class="p4v9qfu9w"/><rect class="disgsxbvy"/><rect class="xawe0xbyo"/><rect class="nlvrp4b2k"/><rect class="ktf_9sbkx"/><rect class="jo-j5acib"/><rect class="isc1omb0p"/><rect class="y_dyf7b4c"/><rect class="qayovacxc"/><rect class="gyygb7jon"/></g>`,
		"fallback": "arcticons:sayboard",
	});
}

export default Component;
